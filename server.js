const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs'); // Módulo para ler os arquivos do PC
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do Multer (salva temporariamente no PC)
const upload = multer({ dest: 'uploads/' });

// Conexão com o Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.post('/api/imoveis', upload.array('images'), async (req, res) => {
  try {
    const dadosImovel = req.body;
    const arquivos = req.files;
    const linksFotos = [];

    // 1. Loop para subir cada foto para o Bucket 'fotos-imoveis'
    for (const arquivo of arquivos) {
      const nomeArquivo = `${Date.now()}-${arquivo.originalname}`;
      const conteudoArquivo = fs.readFileSync(arquivo.path);

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('fotos-imoveis') // Nome exato do seu bucket
        .upload(nomeArquivo, conteudoArquivo, {
          contentType: arquivo.mimetype,
          upsert: false
        });

      if (uploadError) throw uploadError;

      // 2. Pegar a URL pública da foto
      const { data: publicUrlData } = supabase.storage
        .from('fotos-imoveis')
        .getPublicUrl(nomeArquivo);

      linksFotos.push(publicUrlData.publicUrl);

      // 3. Limpeza: Deleta o arquivo temporário da pasta 'uploads'
      fs.unlinkSync(arquivo.path);
    }

    // 4. Salva no SQL com os links REAIS das fotos
    const { data, error: sqlError } = await supabase
      .from('imoveis')
      .insert([{
        ...dadosImovel,
        images: linksFotos // Grava o array de links da nuvem no banco
      }]);

    if (sqlError) throw sqlError;

    res.json({ message: "✅ Imóvel e fotos salvos na nuvem com sucesso!" });

  } catch (err) {
    console.error("Erro no processamento:", err);
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
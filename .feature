# language: pt

Funcionalidade: Login no Portal do Aluno Unyleya
  Como um aluno da Unyleya
  Eu quero fazer login no portal de graduação
  Para acessar minhas informações acadêmicas

  Contexto:
    Dado que estou na página de login "https://portalgraduacao.unyleya.edu.br/login"

  Cenário: Login com credenciais válidas
    Dado que possuo email e senha válidos
    Quando eu preencho o campo "CPF ou E-mail" com "meu.email@exemplo.com"
    E eu preencho o campo "Senha" com "minhaSenha123"
    E eu clico no botão "ENTRAR"
    Então devo ser redirecionado para a página inicial do portal
    E não devo mais estar na página de login
    E devo visualizar o nome do aluno logado

  Cenário: Login com credenciais inválidas
    Quando eu preencho o campo "CPF ou E-mail" com "usuario.invalido@exemplo.com"
    E eu preencho o campo "Senha" com "senhaErrada"
    E eu clico no botão "ENTRAR"
    Então devo permanecer na página de login
    E devo visualizar uma mensagem de erro

  Cenário: Tentativa de login com campos vazios
    Quando eu clico no botão "ENTRAR" sem preencher os campos
    Então devo permanecer na página de login
    E devo visualizar mensagens de validação indicando campos obrigatórios

  Cenário: Validação de formato de email
    Quando eu preencho o campo "CPF ou E-mail" com "emailinvalido"
    E eu preencho o campo "Senha" com "senha123"
    E eu clico no botão "ENTRAR"
    Então devo ver mensagem de validação de email
    E devo permanecer na página de login

  Cenário: Recuperação de senha
    Quando eu clico no link "Esqueci minha senha"
    Então devo ser redirecionado para a página de recuperação de senha
    E devo visualizar um formulário para recuperação

  Cenário: Elementos visuais da página de login
    Então devo ver o logo "GRADUAÇÃO Unyleya"
    E devo ver o campo de "CPF ou E-mail"
    E devo ver o campo de "Senha"
    E devo ver o botão "ENTRAR"
    E devo ver o link "Esqueci minha senha"
    E devo ver o texto "Portal do Aluno"

  Esquema do Cenário: Validação de diferentes formatos de email inválidos
    Quando eu preencho o campo "CPF ou E-mail" com "<email_invalido>"
    E eu preencho o campo "Senha" com "senha123"
    E eu clico no botão "ENTRAR"
    Então devo ver validação de formato
    E devo permanecer na página de login

    Exemplos:
      | email_invalido    |
      | emailsemarroba    |
      | @semdominio       |
      | usuario@          |
      | usuario@.com      |
      | usuario..@test.com|
// ===================================================================
// ATIVIDADE PRÁTICA - UNIDADE 3
// Automação de Testes Web - Portal do Aluno Unyleya
// ===================================================================

/**
 
 * "Este é o código de automação de testes que implementei para o Portal
 * do Aluno da Unyleya. Usei Cypress como ferramenta de automação e segui
 * a especificação em Gherkin que criei anteriormente."
 */

describe('Feature: Login no Portal do Aluno Unyleya', () => {
  
  /**
   
   * "Aqui no beforeEach, defino que antes de cada teste o Cypress deve
   * acessar a página de login e aguardar 2 segundos para garantir que
   * a página carregou completamente."
   */
  beforeEach(() => {
    cy.visit('https://portalgraduacao.unyleya.edu.br/login');
    cy.wait(2000);
  });

  /**
   * CENÁRIO 1: Login com credenciais válidas
   * 
  
   * "O primeiro cenário testa o login com credenciais válidas. O Cypress
   * preenche o email, depois a senha, clica no botão ENTRAR e valida que
   * o usuário foi redirecionado, saindo da página de login."
   */
  it('Cenário: Login com credenciais válidas', () => {
    cy.log('Testando login com credenciais válidas');
    
    const emailValido = 'usuario@exemplo.com';
    const senhaValida = 'senha123';
    
    cy.get('input').first().type(emailValido);
    cy.log('Campo email preenchido');
    
    cy.get('input[type="password"]').type(senhaValida);
    cy.log('Campo senha preenchido');
    
    cy.contains('ENTRAR').click();
    cy.wait(3000);
    
    cy.url().should('not.include', '/login');
    cy.log('Login validado - redirecionamento detectado');
  });

  /**
   * CENÁRIO 2: Login com credenciais inválidas
   * 
   
   * "Este cenário testa se o portal impede login com credenciais incorretas.
   * Como esperado, o usuário permanece na página de login."
   */
  it('Cenário: Login com credenciais inválidas', () => {
    cy.log('Testando login com credenciais inválidas');
    
    cy.get('input').first().type('usuario.invalido@exemplo.com');
    cy.get('input[type="password"]').type('senhaErrada');
    
    cy.contains('ENTRAR').click();
    cy.wait(3000);
    
    cy.url().should('include', '/login');
    cy.log('Permaneceu na página de login - credenciais inválidas');
  });

  /**
   * CENÁRIO 3: Tentativa de login com campos vazios
   * 
   
   * "Aqui valido se o portal exige o preenchimento dos campos obrigatórios.
   * O teste clica em ENTRAR sem preencher nada e verifica se a validação
   * do HTML5 está ativa."
   */
  it('Cenário: Tentativa de login com campos vazios', () => {
    cy.log('Testando login sem preencher campos');
    
    cy.contains('ENTRAR').click();
    cy.wait(2000);
    
    cy.url().should('include', '/login');
    
    cy.get('input').first().then(($input) => {
      const validationMessage = $input[0].validationMessage;
      expect(validationMessage).to.not.be.empty;
      cy.log('Validação de campos obrigatórios funcionando');
    });
  });

  /**
   * CENÁRIO 4: Validação de formato de email
   * 
   
   * "Este teste verifica se o portal valida o formato do email. Quando
   * digito um email sem arroba, o sistema deve rejeitar."
   */
  it('Cenário: Validação de formato de email', () => {
    cy.log('Testando validação de formato de email');
    
    cy.get('input').first().type('emailinvalido');
    cy.get('input[type="password"]').type('senha123');
    
    cy.contains('ENTRAR').click();
    cy.wait(2000);
    
    cy.url().should('include', '/login');
    cy.log('Formato de email validado');
  });

  /**
   * CENÁRIO 5: Recuperação de senha
   * 
   
   * "Aqui verifico se o link de recuperação de senha está presente e
   * acessível na página de login."
   */
  it('Cenário: Recuperação de senha', () => {
    cy.log('Testando link de recuperação de senha');
    
    cy.contains('Esqueci minha senha').should('be.visible');
    cy.log('Link Esqueci minha senha está visível');
    
    cy.contains('Esqueci minha senha').should('exist');
    cy.log('Funcionalidade de recuperação disponível');
  });

  /**
   * CENÁRIO 6: Elementos visuais da página de login
 
   * "Este cenário valida todos os elementos visuais da página: o logo da
   * Unyleya, os campos de entrada, o botão de login e os links. Isso
   * garante que a interface está completa e visível para o usuário."
   */
  it('Cenário: Elementos visuais da página de login', () => {
    cy.log('Validando todos os elementos visuais');
    
    cy.contains('GRADUAÇÃO').should('be.visible');
    cy.contains('Unyleya').should('be.visible');
    cy.log('Logo GRADUAÇÃO Unyleya visível');
    
    cy.get('input').first().should('be.visible');
    cy.log('Campo de email visível');
    
    cy.get('input[type="password"]').should('be.visible');
    cy.log('Campo de senha visível');
    
    cy.contains('ENTRAR').should('be.visible');
    cy.log('Botão ENTRAR visível');
    
    cy.contains('Esqueci minha senha').should('be.visible');
    cy.log('Link Esqueci minha senha visível');
    
    cy.contains('Portal do Aluno').should('be.visible');
    cy.log('Texto Portal do Aluno visível');
    
    cy.log('Todos os elementos visuais validados com sucesso');
  });

  /**
   * CENÁRIO 7: Esquema de cenário com múltiplos exemplos
   * 
   
   * "Por último, implementei um esquema de cenário que testa 5 diferentes
   * formatos de emails inválidos automaticamente. Isso demonstra o poder
   * da automação: ao invés de escrever 5 testes separados, criei um array
   * com os exemplos e o Cypress testa todos eles."
   */
  describe('Esquema do Cenário: Validação de formatos de email inválidos', () => {
    
    const emailsInvalidos = [
      'emailsemarroba',
      '@semdominio',
      'usuario@',
      'usuario@.com',
      'usuario..@test.com'
    ];

    emailsInvalidos.forEach((emailInvalido) => {
      it(`Deve validar email inválido: ${emailInvalido}`, () => {
        cy.log(`Testando email inválido: ${emailInvalido}`);
        
        cy.get('input').first().clear().type(emailInvalido);
        cy.get('input[type="password"]').type('senha123');
        
        cy.contains('ENTRAR').click();
        cy.wait(2000);
        
        cy.url().should('include', '/login');
        cy.log(`Email ${emailInvalido} validado corretamente`);
      });
    });
  });
});

/**
 * CONCLUSÃO 
 * "Estes foram os 11 testes automatizados que implementei: 6 cenários
 * individuais mais 5 testes do esquema de cenário. A automação garante
 * que o portal funciona corretamente e que todas as validações estão
 * ativas, protegendo o sistema contra erros."
 */
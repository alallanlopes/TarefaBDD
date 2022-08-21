describe("ao ser cadastrado um email válido, a mensagem de 'email cadastrado com sucesso' deve aparecer", () => {
    Given('digitado um email valido', () => {
        cy.visit('http://localhost:3051');
        cy.get("input[id='email']").type('rafa@hotmail.com');
    });
        
    When("clicar no botão de cadastrar", () => {
        cy.get("button[id='cadastrar']").click();
    })

    Then("mensagem de 'email cadastrado com sucesso' deve aparecer", () => {
        cy.contains('email cadastrado com sucesso');
    })
})

describe("ao ser enviado um email inválido, a mensagem de 'email inválido, favor tentar novamente' deve aparecer", () => {
    Given('digitado um email inválido', () => {
        cy.visit('http://localhost:3051');
        cy.get("input[id='email']").type('rafahotmail.com');
    });
        
    When("clicar no botão de cadastrar", () => {
        cy.get("button[id='cadastrar']").click();
    })

    Then("mensagem de 'email inválido, favor tentar novamente' deve aparecer", () => {
        cy.contains('email inválido, favor tentar novamente');
    })
})

describe("ao ser enviado um email já cadastrado, a mensagem de 'email já cadastrado' deve aparecer", () => {
    Given('digitado um email já cadastrado', () => {
        cy.visit('http://localhost:3051');
        cy.get("input[id='email']").type('rafa2@hotmail.com');
    });
        
    When("clicar no botão de cadastrar duas vezes", () => {
        cy.get("button[id='cadastrar']").click();
        cy.get("button[id='cadastrar']").click();
    })

    Then("mensagem de 'email já cadastrado' deve aparecer", () => {
        cy.contains('email já cadastrado');
    })
})



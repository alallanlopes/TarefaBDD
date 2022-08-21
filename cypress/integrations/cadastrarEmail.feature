Feature: Cadastrar email
    Cadastrar email para receber promoção

    Scenario: ao ser cadastrado um email válido, a mensagem de 'email cadastrado com sucesso' deve aparecer
    Given digitado um email valido
    When clicar no botão de cadastrar
    Then mensagem de 'email cadastrado com sucesso' deve aparecer

    Scenario: ao ser enviado um email inválido, a mensagem de 'email inválido, favor tentar novamente' deve aparecer
    Given digitado um email inválido
    When clicar no botão de cadastrar
    Then mensagem de 'email inválido, favor tentar novamente' deve aparecer    

    Scenario: ao ser enviado um email já cadastrado, a mensagem de 'email já cadastrado' deve aparecer
    Given digitado um email já cadastrado
    When clicar no botão de cadastrar duas vezes
    Then mensagem de 'email já cadastrado' deve aparecer    
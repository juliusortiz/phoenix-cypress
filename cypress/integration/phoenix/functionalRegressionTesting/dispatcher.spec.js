describe('Dispatcher functional regression testing:', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login dispatcher user', function () {
    cy.login({ username: 'pp.dp_1', password: 'P@ssw0rd123' })
  })
  it('Notifications', function () {
    cy.notification()
  })
  it('Settings', function () {
    cy.settings()
  })
  it('Logout', function () {
    cy.logout()
  })
})


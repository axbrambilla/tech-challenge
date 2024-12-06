describe('/login Suite', () => {
    it('Code 200 - Should login successfuly', () => {
        const body = {
            email: 'fulano@fulano.com',
            password: 'fulano'
        }

        cy.request('POST', '/login', body)
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message').to.eq('Login realizado com sucesso')
            expect(response.body).to.have.property('authorization')
        })
    });

    it('Code 401 - Login Failed', () => {
        const body = {
            email: 'wrongemail@email.com',
            password: 'wrongpassword'
        }

        cy.request( {
            method: 'POST',
            url: '/login',
            body: body,
            failOnStatusCode: false,
        })
        .then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.have.property('message').to.eq('Email e/ou senha inválidos')
            expect(response.body).to.not.have.property('authorization')
        })
    });
});
describe('/usuarios Suite', () => {
    it('Search for a user by ID', () => {
        const parameters = {
            id: '04hLOnBABEbj9Qik'
        }

        cy.request( {
            method: 'GET',
            url: `/usuarios?_id=${parameters.id}`
        })
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('quantidade').to.eq(1)
            expect(response.body).to.have.property('usuarios').that.is.an('array').with.lengthOf(1);
            expect(response.body.usuarios[0]).to.deep.eq(
                {
                    "nome": "Douglas",
                    "password": "1234567",
                    "administrador": "true",
                    "email": "novo23112967email23112967@dominio.com",
                    "_id": "04hLOnBABEbj9Qik"
                }
            )
        })
    });
});
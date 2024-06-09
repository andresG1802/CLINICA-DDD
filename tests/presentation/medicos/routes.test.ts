import request from 'supertest'
import { testServer } from '../../test-server'

describe('Medico route testing',()=>{
    
    beforeAll(async()=>{
        await testServer.start();
    });

    afterAll(()=>{
        testServer.close();
    })
    
    test('should return medicos api/medicos',async()=>{

        
        const {body} = await request(testServer.app)
            .get('/api/medicos')
            .expect(200);

        expect(body).toBeInstanceOf(Array);
    })
});

describe('tratamiento route testing',()=>{
    
    beforeAll(async()=>{
        await testServer.start();
    });

    afterAll(()=>{
        testServer.close();
    })
    
    test('should return tratamiento api/tratamientos',async()=>{

        
        const {body} = await request(testServer.app)
            .get('/api/tratamientos')
            .expect(200);

        expect(body).toBeInstanceOf(Array);
    })
});

describe('emergencia route testing',()=>{
    
    beforeAll(async()=>{
        await testServer.start();
    });

    afterAll(()=>{
        testServer.close();
    })
    
    test('should return emergencia api/emergencia',async()=>{

        
        const {body} = await request(testServer.app)
            .get('/api/emergencias')
            .expect(200);

        expect(body).toBeInstanceOf(Array);
    })
});

describe('personalMedico route testing',()=>{
    
    beforeAll(async()=>{
        await testServer.start();
    });

    afterAll(()=>{
        testServer.close();
    })
    
    test('should return personalMedico api/personalMedico',async()=>{

        
        const {body} = await request(testServer.app)
            .get('/api/personalMedicos')
            .expect(200);

        expect(body).toBeInstanceOf(Array);
    })
});

describe('pacientes route testing',()=>{
    
    beforeAll(async()=>{
        await testServer.start();
    });

    afterAll(()=>{
        testServer.close();
    })
    
    test('should return paciente api/pacientes',async()=>{

        
        const {body} = await request(testServer.app)
            .get('/api/pacientes')
            .expect(200);

        expect(body).toBeInstanceOf(Array);
    })
});
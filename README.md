# NG.CASH

## Executar o `back-end`

### Na pasta /ngcash-back, execute:

1. `npm i`
2. No arquivo .env, é necessário mudar as credenciais de DATABASE_URL para as do seu user postgres
3. `npm run migrate`

4. Se quiser buildar: `npm run build`, depois `npm start`
5. Se quiser executar em ambiente de desenvolvimento: `npm run dev`

### Para rodar os testes, execute:
Se tiver executado `npm run build`, apague a pasta /dist antes de rodar os testes
1. `npm run test`

## Executar o `front-end`

### Na pasta /ngcash-front, execute:

1. `npm i`
2. `npm start`

Depois é só acessar [http://localhost:3000](http://localhost:3000)

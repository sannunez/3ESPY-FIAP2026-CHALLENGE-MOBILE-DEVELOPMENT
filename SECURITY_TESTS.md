# Testes de Segurança — Ações Atrevidas

Testes manuais para validar as implementações de segurança do backend. Suba o servidor com `./mvnw spring-boot:run` antes de começar.

---

## Backend — Thunder Client / curl

- [ ] **XSS via parâmetro de filtro**
  ```
  GET /cars?make=Ford<script>alert(1)</script>
  ```
  Esperado: `400 Invalid request parameters` — o `@Pattern` rejeita caracteres especiais.

- [ ] **Payload longo (buffer overflow)**
  ```
  GET /cars?make=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  ```
  Esperado: `400` — o `@Size(max=50)` bloqueia strings acima de 50 caracteres.

- [ ] **Path traversal via filtro**
  ```
  GET /cars?make=Ford&trim=../../../etc/passwd
  ```
  Esperado: `400` — barras e pontos não passam pelo `@Pattern`.

- [ ] **ID não numérico**
  ```
  GET /cars/abc
  ```
  Esperado: `400 Invalid ID` — o `@Pattern(regexp="^[0-9]+$")` rejeita letras.

- [ ] **ID negativo**
  ```
  GET /cars/-1
  ```
  Esperado: `400` — hífen não é aceito pelo regex do `@Pattern`.

- [ ] **Requisição válida**
  ```
  GET /cars/123
  ```
  Esperado: `200` ou `503` (se a API externa exigir assinatura) — sem erro de validação.

---

## Rate Limiting — curl em loop

- [ ] **Exceder 60 requisições por minuto**
  ```bash
  for i in $(seq 1 65); do curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8080/cars; done
  ```
  Esperado: as primeiras 60 retornam `200`, a partir da 61ª retorna `429 Too Many Requests`.

---

## CORS — Console do Browser

- [ ] **Requisição de origem não autorizada**
  Abrir qualquer site no browser, pressionar F12 e rodar no console:
  ```js
  fetch("http://localhost:8080/cars").then(r => r.json()).then(console.log)
  ```
  Esperado: erro de CORS bloqueando a requisição — o browser exibe `Access to fetch... has been blocked by CORS policy`.

---

## Tratamento de Erros — App + Browser

- [ ] **Backend offline → tela de lista**
  Derrubar o backend e abrir `http://localhost:8080/cars` no browser ou navegar pela lista no app.
  Esperado: resposta `503 Service temporarily unavailable` sem stack trace ou informações internas.

- [ ] **Backend offline → tela de detalhes**
  Derrubar o backend e navegar para os detalhes de um veículo no app.
  Esperado: tela exibe *"Não foi possível carregar os detalhes."* — sem tela branca ou mensagem técnica.

---

## Frontend — Terminal do Expo

- [ ] **Ausência de console.log**
  Com o app rodando, pressionar os botões de filtro de marca (Ford, Chevrolet, Marca).
  Esperado: nenhuma saída aparece no terminal do Metro/Expo — o `console.log` foi removido.

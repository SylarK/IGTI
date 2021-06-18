## Conteúdo Módulo II

- Protocolos de Comunicação
- Requisições HTTP e Status
- Corpo HTTP
- DNS
- Tipos de Autenticação 
(Basic Authentication, Bearer Authentication, Digest Auth, Mutual Auth)
- Codificação Base64



#### Autenticação Básica

- Authorization: Basic aWd0aT0xMjMONTy=.
- Em base64 no formato "usuario:senha".
- Deve ser utilizado somente com conexão HTTPS(TLS).
- Codificação != Criptografia.
- Não garante muita segurança ao aplicativo.
- Usa campos padrão no cabeçalho HTTP.
- Não requer cookies.

#### JSON Web Tokens (Bearer)

- JWT body: Header + Payload + Signature
- Ex: xxxxx.yyyyy.zzzzz
- Header: Tipo de token, algoritmo utilizado (transforma base64).
- Payload: Reserved claims, public claims, private claims (transforma base64).
- Signature: Concatenação dos hashes usando a base64UrlEncode com uma chave secreta.

#### Criptografia

- É a ciência e a arte de manter mensagens seguras.
- Texto claro ---> Cifragem ----> Texto Cifrado ----> Decifragem ----> Texto claro 
- Composição Chave simétrica (mono e poli)
(Texto -> Algoritmo de criptografia -> Chave secreta -> Texto cifrado -> Algoritmo de decriptografia)
- Diffie-Hellman (chave simétrica)
- Chave assimétrica


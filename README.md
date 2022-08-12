# Mega lista dos 5 principais comandos Git!
## 1. Git Clone
- Git clone é uma comando para baixar o código-fonte existente de um repositório remoto (como, por exemplo, o Github). Em outras palavras, git clone, basicamente, faz uma cópia idêntica da versão mais recente de um projeto em um repositório e a salva em seu computador.
	> git clone "https://link-com-o-nome-do-repositório"

## 2. Git branch
- _Branches_ (algo como ramificações, em português) são altamente importantes no mundo do git. Usando as _branches_, vários desenvolvedores conseguem trabalhar em paralelo no mesmo projeto simultaneamente. Podemos usar o comando git branch para criar, listar e excluir as _branches.
	> git branch "nome-da-branch"
	
## 3. Git checkout
- Esse também é um dos comandos do Git mais usados. Para trabalhar em uma branch, primeiro, é preciso "entrar" nela. Usamos ****git checkout****, na maioria dos casos, para trocar de uma branch para outra. Também podemos usar o comando para fazer o checkout de arquivos e commits.
	> git checkou"nome-da-branch"
	
## 4. Git status
- O comando git status nos dá todas as informações necessárias sobre a branch atual.
	> git status
	
## 5. Git Clone
- Ao criarmos, modificarmos ou excluirmos um arquivo, essas alterações acontecerão em nosso espaço de trabalho local e não serão incluídas no próximo commit (a menos que alteremos as configurações).
- Precisamos usar o comando git add para incluir as alterações de um ou vários arquivos em nosso próximo commit.
	> git add "arquivo"

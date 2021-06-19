# Instalando mysql no servidor
``` GIT clone
git clone https://github.com/torneseumprogramador/imsersao-seguranca-web.git
```

# Instalando pacotes no servidor
``` SQL
sudo apt update
sudo apt install nodejs
sudo apt install npm
sudo apt install nginx
```

# Instalando mysql no servidor
``` SQL
sudo apt install mysql-server
sudo mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED BY 'Senha&12_torne00';
CREATE USER 'root'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY 'Senha&12_torne00';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'127.0.0.1';
FLUSH PRIVILEGES;
```

# Restaurar dump
``` SQL
sudo mysql -uroot imersao_seguranca < sql/imersao_seguranca_dump.sql 
```

# Para instalar no servidor utilizar
``` bash
sudo vim ~/.bashrc
```

# Para instalar no servidor utilizar
``` bash
export NODE_ENV=production
export DATABASE_HOST=localhost
export DATABASE_USER=root
export DATABASE_PASS='Senha&12_torne00'
export DATABASE=imersao_seguranca
export DATABASE_PORT=3306
export RECPTCHA_KEY=key
export RECPTCHA_PASS=pass
```

# Para instalar source
``` bash
source ~/.bashrc
```

# configurar nginx
``` bash
sudo vim /etc/nginx/sites-available/default
```
# configurar conteudo nginx
``` nginx
server {
        listen 80 default_server;
        listen [::]:80 default_server;
         location / {
                proxy_pass  http://localhost:3000;
        }
}
```

# start VPS
``` bash
nohup npm start &
```

# listar processos
``` bash
ps -aux | grep node
```

# matar processo
``` bash
sudo kill -9 {NUMERO_PID}
```

# comandos nginx
``` bash
sudo systemctl stop nginx
sudo systemctl start nginx
sudo systemctl restart nginx
```

# comandos comandos sql injection
``` sql
select id, nome, login, senha from usuarios 
where login='blabla' or  'a' = 'a' and senha='blabla' or  'a' = 'a' 

login = blabla' or  'a' = 'a
senha = blabla' or  'a' = 'a

select id, nome, login, senha from usuarios
where login='danilo' and senha='danilo' 
```

# Criando chave recaptcha
https://www.google.com/recaptcha/admin/create
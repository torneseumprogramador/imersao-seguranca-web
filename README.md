# Instalando mysql no servidor
``` SQL
sudo apt update
sudo apt install mysql-server
sudo mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED BY 'suasenha';
mysql -u ubuntu -p'suasenha'
```

# Restaurar dump
``` SQL
sudo mysql -uroot imersao_seguranca < sql/imersao_seguranca_dump.sql 
```

# Para instalar no servidor utilizar
``` bash
sudo vim ~/.bashrc
source ~/.bashrc
```

# Para instalar no servidor utilizar
``` bash
export NODE_ENV=production
export DATABASE_HOST=localhost
export DATABASE_USER=root
export DATABASE_PASS=suasenha
export DATABASE=imersao_seguranca
export DATABASE_PORT=3306
```
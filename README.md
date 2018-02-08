# creatorForsocket_io
# creator 1.8.1

# 安装npm，node，express，socket.io
安装node：brew install node
    一般安装了node，自动安装了npm；
    执行以下命令查看是否安装成功
    node -v:查看node版本
    npm -v：查看npm版本
安装express：npm install -g express-generator
    express --version：查看npm版本
    
# 运行
  服务器：
    cd到服务器文件app.js的路径，
    执行命令：
      npm link express
      npm link socket.io
      node app.js
      此时一个超级简单服务器已经跑起来了
  客户端：
    直接运行即可


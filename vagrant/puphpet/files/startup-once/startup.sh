## install node.js
cd ~/tmp;
wget http://nodejs.org/dist/v0.10.29/node-v0.10.29.tar.gz;
tar zvxf node-v0.10.29.tar.gz;
cd node-v0.10.29;
./configure;
make;
make install;

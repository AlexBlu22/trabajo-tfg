#!/bin/sh

# crear

clear

echo "=================="
echo " _____ _____ ____"
echo "|_   _|  ___/ ___|"
echo "  | | | |_ | |  _"
echo "  | | |  _|| |_| |"
echo "  |_| |_|   \____|"
echo "=================="
echo ""
# figlet (texto ASCII)

sleep 1

# opciones

echo "Quieres crear el contenedor?"
echo "-- \e[0;32ms\e[0m | \e[0;31mn\e[0m --"
read opcion

# seleccion de las opciones

case $opcion in

s)
echo ""
echo "CREACION DEL CONTENEDOR"
# comando para iniciar el docker-compose
sudo docker-compose up -d\;
sleep 1
;;

n)
echo ""
echo "CREACION DEL CONTENEDOR CANCELADO"
sleep 1
;;

*)
echo ""
echo "OPCIÓN NO VÁLIDA"
sleep 1
sh TFG-docker.sh
;;

esac

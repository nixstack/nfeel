FROM nginx

COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf	/etc/nginx/nginx.conf
COPY public	    /opt/public

#COPY /server.crt	/etc/nginx/server.crt
#COPY /server.key	/etc/nginx/server.key

CMD /bin/bash -c "envsubst '\$PORT \$HEROKU_APP_WEB_URL \$HEROKU_APP_API_URL' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
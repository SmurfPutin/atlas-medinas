# Single stage: serve the static site with nginx on a lightweight image.
# Assignment constraint: light base image (alpine), copy the files,
# expose port 80.
FROM nginx:alpine

# Copy the site into the directory nginx serves
COPY index.html /usr/share/nginx/html/index.html
COPY html/ /usr/share/nginx/html/html/
COPY css/  /usr/share/nginx/html/css/
COPY js/   /usr/share/nginx/html/js/

EXPOSE 80

# nginx:alpine starts nginx by itself — no CMD strictly needed,
# kept explicit for the oral defense:
CMD ["nginx", "-g", "daemon off;"]

# Use the nginx image from Docker Hub as the base image
FROM nginx:alpine

# Remove the default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the static content (HTML, CSS, JS) into the container
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Use the default command of the nginx image which starts nginx
CMD ["nginx", "-g", "daemon off;"]
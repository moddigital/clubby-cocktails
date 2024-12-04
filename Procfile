# Run Composer to install PHP dependencies
release: composer install

# Create a user if necessary (run once after the first deploy)
# You might want to handle this manually if user creation requires input.
release: php please make:user || echo "User already exists"

# Web process to serve the PHP application using Apache
web: vendor/bin/heroku-php-apache2 public/

# Optional: Build front-end assets with Vite before starting the server
postinstall: npm install && npm run prod

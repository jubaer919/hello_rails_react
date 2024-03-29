Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://127.0.0.1:3000', 'http://localhost:3000'
      resource '/api/v1/greetings', headers: :any, methods: [:get, :post, :put, :delete]
    end
  end
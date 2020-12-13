class ContactsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        @title = params[:title]
        @email = params[:email]
        @message = params[:message]

        Message.create(title: @title, email: @email, message: @message)
    end
end
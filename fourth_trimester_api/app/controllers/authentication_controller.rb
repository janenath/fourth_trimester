class AuthenticationController < ApplicationController
    skip_before_action :authenticate_request
    # skip_before_action :authorized, only: [:new, :create]
   
    # def new
    #   @user = User.new
    # end

    # def create
    #   @user = User.create(params.require(:username, :password_digest))
    #   session[:user_id] = @user.user_id
    #   redirect_to '/home'
    # end

    def authenticate
      command = AuthenticateUser.call(params[:username], params[:password_digest])
   
      if command.success?
        render json: { auth_token: command.result }
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end



   end
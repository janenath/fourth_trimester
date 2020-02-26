class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end
end


# class ApplicationController < ActionController::API
    # before_action :authorized
    # helper_method :current_user
    # helper_method :logged_in?

    # def current_user
    #   User.find_by(id: session[:user_id])
    # end

    # def logged_in?
    #   !current_user.nil?
    # end

    # def authorized
    #   redirect_to '/home' unless logged_in?
    # end
    # attr_reader :current_user
  
    # private
  
    # def authenticate_request
    #   @current_user = AuthorizeApiRequest.call(request.headers).result
    #   render json: { error: 'Not Authorized' }, status: 401 unless @current_user
    # end
# end

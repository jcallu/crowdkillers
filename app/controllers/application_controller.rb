class ApplicationController < ActionController::Base
  protect_from_forgery
  skip_before_filter :authenticate
  helper_method :authenticated?

  protected

  def authenticated?
    session[:authenticated] == true
  end

  def authenticate
    redirect_to new_session_path
  end
end

class SessionsController < ApplicationController
  skip_before_filter :authenticate

  def create
    if authenticator(params[:username], params[:password])
      session[:authenticated] = true
      redirect_to root_path
    else
      redirect_to new_session_path
    end
  end

  def destroy
    reset_session
    redirect_to root_path
  end

  private

  def authenticator(user,pass)
    if( user.to_s == 'crowdkillers' && pass.to_s == 'vultures' )
      true
    end
  end
end

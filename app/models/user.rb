class User < ActiveRecord::Base
  has_many :fish
  has_secure_password
  def new
    @user = User.new
    @instruments = User.instruments
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end
end

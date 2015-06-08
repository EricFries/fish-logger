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

  def user_markers(fish_array)
    species_location_hash = {}
    fish_array.each do |fish|
      if output_hash[fish.species] = nil
        output_hash[fish] = [[fish.latitude, fish.longitude]]
      else
        output_hash << [fish.latitude, fish.longitude]
      end
    end
    species_location_hash
  end

end

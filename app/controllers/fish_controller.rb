class FishController < ApplicationController

  def index
    @fishes = Fish.all.reverse
  end

  def new
    @fish = Fish.new
  end

  def create
    @fish = Fish.create(fish_params)
    @fish.update(:user => current_user)
    redirect_to fish_index_path
  end

  private
  def fish_params
    params.require(:fish).permit(:date, :time, :species, :length, :latitude, :longitude, :weight, :location)
  end
end

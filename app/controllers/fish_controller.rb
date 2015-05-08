class FishController < ApplicationController

  def index
    @fishes = Fish.all
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
    params.require(:fish).permit(:species, :length, :weight, :location)
  end
end
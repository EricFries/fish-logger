class FishController < ApplicationController
  before_filter :signed_in, only: [:new, :create, :edit, :destroy]
  before_filter :require_permission, only: [:edit, :destroy]

  def show
    @fish = Fish.find(params[:id])
  end

  def index
    @fishes = Fish.all.reverse
  end

  def new
    @fish = Fish.new
    @species_array = Fish.species_array
  end

  def create
    @fish = Fish.create(fish_params)
    @fish.update(:user => current_user)
    redirect_to fish_path(@fish)
  end

  def destroy
    @fish = Fish.find(params[:id])
    if current_user == @fish.user
      @fish.destroy
      respond_to do |format|
        format.js { render "delete_fish"}
      end
    end
  end

  def edit
    @fish = Fish.find(params[:id])
    @species_array = Fish.species_array
  end

  def update
    @fish = Fish.find(params[:id])
    @fish.update(fish_params)
    redirect_to fish_path(@fish)
  end

  def require_permission
    if current_user != Fish.find(params[:id]).user
        redirect_to root_path
    end
  end

  private
  def fish_params
    params.require(:fish).permit(:date, :time, :species, :length, :latitude, :longitude, :weight, :location, :image)
  end
end

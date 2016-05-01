class Api::V1::FishController < Api::V1::BaseController
  include ActiveHashRelation

  def show
    fish = Fish.find(params[:id])
    render(json: Api::V1::FishSerializer.new(fish).to_json)
  end

  def index
      fishes = Fish.all

      # This is some weird thing from the ActiveHashRelation gem
      fishes = apply_filters(fishes, params)

      render(
          json: ActiveModel::ArraySerializer.new(
            fishes,
            each_serializer: Api::V1::FishSerializer,
            root: 'fish',
          )
      )
  end

  def create
    # binding.pry
    fish = Fish.create(fish_params)
    # fish.update(:user => current_user)
    render(json: Api::V1::FishSerializer.new(fish).to_json)

  end

  private
  def fish_params
    params.require(:fish).permit(:date, :time, :species, :length, :latitude, :longitude, :weight, :location, :image)
  end

end

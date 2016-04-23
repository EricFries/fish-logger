class Api::V1::FishSerializer < Api::V1::BaseSerializer
  attributes :id, :species, :weight, :length, :user_id, :date, :longitude,  :latitude,  :time,  :image_file_name,  :image_content_type,  :image_file_size,  :image_updated_at, :created_at, :updated_at
end

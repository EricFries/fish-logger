class Fish < ActiveRecord::Base
  belongs_to :user
  has_attached_file :image, styles: {
    thumb: '100x100>',
    medium: '400x300>'
  }
end

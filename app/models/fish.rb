class Fish < ActiveRecord::Base
  belongs_to :user
  has_attached_file :image, 
  styles: {
    thumb: '100x100>',
    medium: '400x300>'
  }
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
 
end

class Fish < ActiveRecord::Base
  belongs_to :user
  has_attached_file :image, 
  styles: {
    thumb: '100x100>',
    medium: '600x450>'
  }
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
 

  def has_image?
    self.image_file_name != nil
  end

  def self.species_array
    ["Fluke", "Sea Bass", "Bluefish", "Striped Bass", "Porgy", "Blackfish", "Dogfish", "Largemouth Bass", "Smallmouth Bass", "Other"]
  end

end

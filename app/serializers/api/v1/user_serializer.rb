class Api::V1::UserSerializer < Api::V1::BaseSerializer
  attributes :id, :email, :name, :created_at, :updated_at

  has_many :fish
end

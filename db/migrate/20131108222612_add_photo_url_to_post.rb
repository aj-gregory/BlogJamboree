class AddPhotoUrlToPost < ActiveRecord::Migration
  def change
    add_column :posts, :photo_url, :string
  end
end

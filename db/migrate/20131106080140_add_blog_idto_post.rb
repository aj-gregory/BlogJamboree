class AddBlogIdtoPost < ActiveRecord::Migration
  def change
  	add_column :posts, :blog_id, :integer, :null => false, :default => 0
  end
end

class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.integer :user_id, :null => false
      t.string :name, :null => false
      t.text :description

      t.timestamps
    end
    add_index :blogs, :user_id
  end
end

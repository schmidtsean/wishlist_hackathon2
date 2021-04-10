class AddBelongsToToItems < ActiveRecord::Migration[6.1]
  def change
    add_reference :items, :wishlist, null: false, foreign_key: true
  end
end

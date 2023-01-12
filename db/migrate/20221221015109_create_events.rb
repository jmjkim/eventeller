class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :coordinator_id
      t.string :name
      t.string :start_date
      t.string :end_date
      t.string :start_time
      t.string :end_time
      t.string :street
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :description

      t.timestamps
    end
  end
end

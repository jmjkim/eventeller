class CreateFeedbacks < ActiveRecord::Migration[6.1]
  def change
    create_table :feedbacks do |t|
      t.integer :attendee_id
      t.integer :event_id
      t.string :feedback_input

      t.timestamps
    end
  end
end

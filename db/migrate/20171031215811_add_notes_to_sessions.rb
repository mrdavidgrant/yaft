class AddNotesToSessions < ActiveRecord::Migration[5.1]
  def change
    add_column :sessions, :notes, :text
  end
end

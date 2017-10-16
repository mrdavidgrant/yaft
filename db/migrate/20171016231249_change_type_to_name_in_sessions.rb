class ChangeTypeToNameInSessions < ActiveRecord::Migration[5.1]
  def change
    remove_column :sessions, :type
    add_column :sessions, :name, :string
  end
end

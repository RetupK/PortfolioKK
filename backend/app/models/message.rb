class Message < ApplicationRecord
    after_create :notify_admin
    def notify_admin
        MessageMailer.new_message_notification(self).deliver
    end
end

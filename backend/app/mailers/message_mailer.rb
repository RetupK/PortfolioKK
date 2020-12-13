class MessageMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.new_message_notification.subject
  #
  def new_message_notification(message)
    @message = message
    mail to: "kalinowskikrystian98@gmail.com", subject: message.title, from: "Twoja Stara <retupk@gmail.com>"
  end
end

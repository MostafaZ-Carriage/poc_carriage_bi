class OrderCountChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'messages'
  end
end

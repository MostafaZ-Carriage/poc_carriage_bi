class OrderCount
  include Mongoid::Document
  field :number, type: Integer

  after_save :broadcast

  def broadcast
    ActionCable.server.broadcast 'messages', number: OrderCount.first.number
  end
end
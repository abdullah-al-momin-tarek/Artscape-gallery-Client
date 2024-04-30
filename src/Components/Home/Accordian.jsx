const Accordian = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What types of painting and drawing categories do you offer?
        </div>
        <div className="collapse-content">
          <p>
            We offer a variety of painting and drawing categories, including
            landscape painting, portrait drawing, watercolor art, oil painting,
            charcoal sketching, and cartoon drawing.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Do you provide customization options for your art items?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer customization options for many of our art items.
            Whether you want to personalize a portrait or adjust the colors of a
            painting, we can accommodate your preferences. Contact us for more
            information on customization services.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How long does it take to process an order?
        </div>
        <div className="collapse-content">
          <p>
            The processing time for orders varies depending on the complexity of
            the item and any customization requests. Typically, orders are
            processed within 30-50 hour. For made-to-order items or
            customizations, processing times may be longer. We'll provide you
            with an estimated timeline when you place your order.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Are your art items ready to hang or frame?
        </div>
        <div className="collapse-content">
          <p>
            Most of our art items come ready to hang or display. Paintings on
            canvas are typically stretched and ready for framing, while drawings
            may be mounted on backing or come with mats for framing. If you have
            specific framing requirements, please let us know, and we can assist
            you with customization options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;

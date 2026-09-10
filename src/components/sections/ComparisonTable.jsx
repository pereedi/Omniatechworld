import React from 'react';
import { PRODUCTS } from '../../data/products';

export default function ComparisonTable({ onOpenDeviceModal }) {
  return (
    <section className="w-full bg-surface py-5xl" id="compare">
      <div className="max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-2xl">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              DEVICE MATRIX
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-xs tracking-tight">
              Find the OMNIA That's Right For You
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Side-by-side technical breakdown across our smartphone collection.
          </p>
        </div>

        {/* Matrix Table Responsive Wrapper */}
        <div className="w-full overflow-x-auto rounded-lg shadow-[0_12px_32px_-10px_rgba(0,92,174,0.12)] bg-surface-container-lowest border border-surface-variant/30">
          <table className="w-full text-left border-collapse min-w-[760px]">
            {/* Table Head */}
            <thead>
              <tr className="bg-surface-container-low text-on-surface">
                <th className="p-lg font-label-lg text-label-lg uppercase tracking-wider w-1/5">
                  Specification
                </th>
                {PRODUCTS.map((prod) => (
                  <th
                    key={prod.id}
                    className="p-lg font-headline-sm text-headline-sm font-semibold text-on-surface w-1/5"
                  >
                    <span
                      className={`font-label-sm text-label-sm block uppercase tracking-wider ${
                        prod.id === 'bliss-s1'
                          ? 'text-secondary'
                          : prod.id === 'fold-s1'
                          ? 'text-tertiary'
                          : 'text-primary'
                      }`}
                    >
                      {prod.comparison.category}
                    </span>
                    {prod.name.replace('OMNIA ', '')}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-surface-variant/30 font-body-md text-body-md">
              {/* Row 1: Display */}
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="p-md lg:p-lg font-semibold text-on-surface bg-surface-container-low/20">
                  Display & Glass
                </td>
                {PRODUCTS.map((prod) => (
                  <td key={prod.id} className="p-md lg:p-lg text-on-surface">
                    <span
                      className={`font-bold block ${
                        prod.id === 'fold-s2' ? 'text-primary' : ''
                      }`}
                    >
                      {prod.comparison.displayTitle}
                    </span>
                    <span className="text-body-sm text-on-surface-variant">
                      {prod.comparison.displaySub}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 2: Network & CPU */}
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="p-md lg:p-lg font-semibold text-on-surface bg-surface-container-low/20">
                  Network & CPU
                </td>
                {PRODUCTS.map((prod) => (
                  <td key={prod.id} className="p-md lg:p-lg text-on-surface">
                    {prod.comparison.networkBadge ? (
                      <span className="inline-flex items-center gap-xs px-2xs py-2xs rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                        {prod.comparison.networkBadge}
                      </span>
                    ) : null}
                    <span className="block mt-2xs">{prod.comparison.cpu}</span>
                  </td>
                ))}
              </tr>

              {/* Row 3: Memory & Storage */}
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="p-md lg:p-lg font-semibold text-on-surface bg-surface-container-low/20">
                  Memory & Storage
                </td>
                {PRODUCTS.map((prod) => (
                  <td
                    key={prod.id}
                    className={`p-md lg:p-lg text-on-surface ${
                      prod.comparison.isPrimaryMemory
                        ? 'font-semibold text-primary'
                        : ''
                    }`}
                  >
                    {prod.comparison.memory}
                  </td>
                ))}
              </tr>

              {/* Row 4: Rear Cameras */}
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="p-md lg:p-lg font-semibold text-on-surface bg-surface-container-low/20">
                  Rear Cameras
                </td>
                {PRODUCTS.map((prod) => (
                  <td key={prod.id} className="p-md lg:p-lg text-on-surface">
                    <span
                      className={`font-bold block ${
                        prod.comparison.isPrimaryCamera ? 'text-primary' : ''
                      }`}
                    >
                      {prod.comparison.rearCamTitle}
                    </span>
                    <span className="text-body-sm text-on-surface-variant">
                      {prod.comparison.rearCamSub}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 5: Front Camera */}
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="p-md lg:p-lg font-semibold text-on-surface bg-surface-container-low/20">
                  Front Camera
                </td>
                {PRODUCTS.map((prod) => (
                  <td
                    key={prod.id}
                    className={`p-md lg:p-lg text-on-surface ${
                      prod.id === 'bliss-s1'
                        ? 'font-semibold text-secondary'
                        : ''
                    }`}
                  >
                    {prod.comparison.frontCam}
                  </td>
                ))}
              </tr>

              {/* Row 6: Battery */}
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="p-md lg:p-lg font-semibold text-on-surface bg-surface-container-low/20">
                  Battery Capacity
                </td>
                {PRODUCTS.map((prod) => (
                  <td key={prod.id} className="p-md lg:p-lg text-on-surface">
                    <span
                      className={`font-bold block ${
                        prod.id === 'bliss-s1' ? 'text-primary' : ''
                      }`}
                    >
                      {prod.comparison.batteryTitle}
                    </span>
                    {prod.comparison.batterySub && (
                      <span className="text-body-sm text-on-surface-variant">
                        {prod.comparison.batterySub}
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Row 7: Special Inclusions */}
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="p-md lg:p-lg font-semibold text-on-surface bg-surface-container-low/20">
                  Special Inclusions
                </td>
                {PRODUCTS.map((prod) => (
                  <td key={prod.id} className="p-md lg:p-lg text-on-surface">
                    {prod.id === 'prolific-s1' ? (
                      <span className="inline-flex items-center gap-2xs px-xs py-2xs rounded bg-surface-container font-label-sm text-label-sm font-bold text-primary">
                        {prod.comparison.special}
                      </span>
                    ) : (
                      prod.comparison.special
                    )}
                  </td>
                ))}
              </tr>

              {/* Row 8: Action Buttons */}
              <tr className="bg-surface-container-low">
                <td className="p-md lg:p-lg font-semibold text-on-surface">
                  Order Direct
                </td>
                {PRODUCTS.map((prod) => (
                  <td key={prod.id} className="p-md lg:p-lg">
                    <button
                      type="button"
                      onClick={() => onOpenDeviceModal(prod.id)}
                      className="w-full py-xs px-sm rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-300 text-center shadow-sm hover:shadow-md"
                    >
                      Order {prod.name.replace('OMNIA ', '')}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
